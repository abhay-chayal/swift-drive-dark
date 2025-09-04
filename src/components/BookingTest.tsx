import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { showPremiumToast } from '@/components/ui/premium-toast';

const BookingTest = () => {
  const [testResults, setTestResults] = useState<string[]>([]);
  const [isTestingAuth, setIsTestingAuth] = useState(false);
  const [isTestingFunction, setIsTestingFunction] = useState(false);

  const addResult = (result: string) => {
    setTestResults(prev => [...prev, `${new Date().toLocaleTimeString()}: ${result}`]);
  };

  const testAuthentication = async () => {
    setIsTestingAuth(true);
    addResult('🔍 Testing authentication...');
    
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error) {
        addResult(`❌ Auth error: ${error.message}`);
        return;
      }
      
      if (!session) {
        addResult('❌ No active session - user not logged in');
        return;
      }
      
      addResult(`✅ User authenticated: ${session.user.email}`);
      addResult(`📧 User metadata: ${JSON.stringify(session.user.user_metadata, null, 2)}`);
      
    } catch (error: any) {
      addResult(`❌ Auth test failed: ${error.message}`);
    } finally {
      setIsTestingAuth(false);
    }
  };

  const testEdgeFunction = async () => {
    setIsTestingFunction(true);
    addResult('🔍 Testing edge function...');
    
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        addResult('❌ Cannot test function - no user session');
        setIsTestingFunction(false);
        return;
      }

      const testData = {
        userEmail: session.user.email,
        userName: session.user.user_metadata?.full_name || session.user.email,
        pickupLocation: 'malviya-nagar',
        dropoffLocation: 'c-scheme', 
        pickupDate: '2025-02-01',
        pickupTime: '09:00',
        duration: '4 Hours - ₹480',
        phone: '+91 98765 43210'
      };

      addResult(`📤 Sending test booking data: ${JSON.stringify(testData, null, 2)}`);

      const { data, error } = await supabase.functions.invoke('send-booking-email', {
        body: testData
      });
      
      if (error) {
        addResult(`❌ Edge function error: ${JSON.stringify(error, null, 2)}`);
        showPremiumToast(`Function Error: ${error.message}`, "error");
        return;
      }
      
      addResult(`✅ Edge function success: ${JSON.stringify(data, null, 2)}`);
      showPremiumToast("Test booking email sent successfully!", "success");
      
    } catch (error: any) {
      addResult(`❌ Function test failed: ${error.message}`);
      showPremiumToast(`Test Failed: ${error.message}`, "error");
    } finally {
      setIsTestingFunction(false);
    }
  };

  const clearResults = () => {
    setTestResults([]);
  };

  return (
    <Card className="max-w-4xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>🧪 Booking System Test Suite</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-4">
          <Button 
            onClick={testAuthentication} 
            disabled={isTestingAuth}
            variant="outline"
          >
            {isTestingAuth ? 'Testing Auth...' : 'Test Authentication'}
          </Button>
          
          <Button 
            onClick={testEdgeFunction}
            disabled={isTestingFunction}
            className="btn-premium"
          >
            {isTestingFunction ? 'Testing Function...' : 'Test Edge Function'}
          </Button>
          
          <Button onClick={clearResults} variant="ghost">
            Clear Results
          </Button>
        </div>

        {testResults.length > 0 && (
          <div className="bg-muted/50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Test Results:</h3>
            <div className="space-y-1 text-sm font-mono max-h-96 overflow-y-auto">
              {testResults.map((result, index) => (
                <div key={index} className="whitespace-pre-wrap">
                  {result}
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BookingTest;
