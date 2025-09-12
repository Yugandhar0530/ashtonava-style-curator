import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { User, Package, Heart, Settings, LogOut } from "lucide-react";

const Account = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      {/* Header */}
      <section className="py-8 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-deep-plum">
            My Account
          </h1>
          <p className="font-body text-mid-plum mt-2">
            Manage your profile, orders, and preferences
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Account Menu */}
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start text-left">
                <User className="w-4 h-4 mr-2" />
                Profile Information
              </Button>
              <Button variant="ghost" className="w-full justify-start text-left">
                <Package className="w-4 h-4 mr-2" />
                Order History
              </Button>
              <Button variant="ghost" className="w-full justify-start text-left">
                <Heart className="w-4 h-4 mr-2" />
                Wishlist
              </Button>
              <Button variant="ghost" className="w-full justify-start text-left">
                <Settings className="w-4 h-4 mr-2" />
                Account Settings
              </Button>
              <Button variant="ghost" className="w-full justify-start text-left text-destructive">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h2 className="font-body font-semibold text-lg text-deep-plum mb-6">
                  Profile Information
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-mid-plum mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      defaultValue="John Doe"
                      className="w-full px-3 py-2 border border-lavender rounded-lg focus:outline-none focus:ring-2 focus:ring-mid-plum"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-mid-plum mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue="john.doe@example.com"
                      className="w-full px-3 py-2 border border-lavender rounded-lg focus:outline-none focus:ring-2 focus:ring-mid-plum"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-mid-plum mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      defaultValue="+91 98765 43210"
                      className="w-full px-3 py-2 border border-lavender rounded-lg focus:outline-none focus:ring-2 focus:ring-mid-plum"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-mid-plum mb-1">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-lavender rounded-lg focus:outline-none focus:ring-2 focus:ring-mid-plum"
                    />
                  </div>
                </div>
                
                <div className="mt-6 flex gap-3">
                  <Button variant="premium-primary">
                    Save Changes
                  </Button>
                  <Button variant="ghost">
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;