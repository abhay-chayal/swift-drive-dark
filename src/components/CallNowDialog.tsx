import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Phone, Copy } from 'lucide-react';
import { showPremiumToast } from '@/components/ui/premium-toast';

const CallNowDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const phoneNumbers = [
    { number: '9828061023', label: 'Primary Support' },
    { number: '9817174771', label: 'Secondary Support' }
  ];

  const handleCall = (number: string) => {
    window.open(`tel:+91${number}`, '_self');
  };

  const handleCopy = async (number: string) => {
    try {
      await navigator.clipboard.writeText(`+91${number}`);
      showPremiumToast(`Copied +91${number} to clipboard`, "success");
    } catch (err) {
      showPremiumToast("Failed to copy number", "error");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="glass border-primary/20 hover:border-primary/40 text-primary hover:text-primary-foreground hover:bg-primary/10 w-full md:w-auto">
          <Phone className="w-4 h-4 mr-2" />
          Call Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md glass border-0">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">Contact Support</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <p className="text-muted-foreground text-center text-sm">
            Call us directly for instant assistance
          </p>
          {phoneNumbers.map((phone, index) => (
            <div key={phone.number} className="flex items-center justify-between p-4 rounded-lg border border-border/20 bg-muted/30">
              <div>
                <div className="font-semibold">+91 {phone.number}</div>
                <div className="text-sm text-muted-foreground">{phone.label}</div>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={() => handleCall(phone.number)}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <Phone className="w-4 h-4 mr-1" />
                  Call
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleCopy(phone.number)}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
          <div className="text-xs text-muted-foreground text-center mt-4">
            Available 24/7 for booking assistance and support
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CallNowDialog;