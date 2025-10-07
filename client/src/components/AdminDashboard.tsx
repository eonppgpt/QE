import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { LogOut, Gift, User, MapPin } from "lucide-react";

interface Order {
  id: string;
  senderName: string;
  senderCountry: string;
  receiverName: string;
  receiverAddress: string;
  receiverPhone: string;
  messageCard: string;
  giftSelection: string;
  paymentMethod: string;
  createdAt: string;
}

interface AdminDashboardProps {
  orders: Order[];
  onLogout: () => void;
}

const giftNames: Record<string, string> = {
  original: "QE ORIGINAL SET",
  luxury: "LUXURY EDITION",
  wine: "WINE & ROSE PACKAGE",
  roses: "100 ROSES BOUQUET",
};

export default function AdminDashboard({ orders, onLogout }: AdminDashboardProps) {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="max-w-screen-2xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="font-serif text-2xl" data-testid="text-admin-title">QE Admin Dashboard</h1>
          <Button 
            variant="outline" 
            onClick={onLogout}
            data-testid="button-admin-logout"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="max-w-screen-2xl mx-auto px-6 py-8">
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <Gift className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid="text-total-orders">{orders.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Recent Order</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                {orders.length > 0 ? orders[0].senderName : "No orders yet"}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Locations</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                {orders.length > 0 ? `${new Set(orders.map(o => o.senderCountry)).size} countries` : "No data"}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Sender</TableHead>
                    <TableHead>Receiver</TableHead>
                    <TableHead>Gift</TableHead>
                    <TableHead>Payment</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                        No orders yet
                      </TableCell>
                    </TableRow>
                  ) : (
                    orders.map((order) => (
                      <TableRow key={order.id} data-testid={`row-order-${order.id}`}>
                        <TableCell className="font-mono text-sm">{order.id.slice(0, 8)}</TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{order.senderName}</div>
                            <div className="text-sm text-muted-foreground">{order.senderCountry}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{order.receiverName}</div>
                            <div className="text-sm text-muted-foreground">{order.receiverPhone}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">{giftNames[order.giftSelection] || order.giftSelection}</Badge>
                        </TableCell>
                        <TableCell className="capitalize">{order.paymentMethod}</TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedOrder(order)}
                            data-testid={`button-view-order-${order.id}`}
                          >
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {selectedOrder && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Order Details - {selectedOrder.id.slice(0, 8)}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Sender Information</h4>
                  <div className="space-y-1 text-sm">
                    <p><span className="text-muted-foreground">Name:</span> {selectedOrder.senderName}</p>
                    <p><span className="text-muted-foreground">Country:</span> {selectedOrder.senderCountry}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Receiver Information</h4>
                  <div className="space-y-1 text-sm">
                    <p><span className="text-muted-foreground">Name:</span> {selectedOrder.receiverName}</p>
                    <p><span className="text-muted-foreground">Address:</span> {selectedOrder.receiverAddress}</p>
                    <p><span className="text-muted-foreground">Phone:</span> {selectedOrder.receiverPhone}</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Message Card</h4>
                <p className="text-sm text-muted-foreground bg-muted p-4 rounded-md">
                  {selectedOrder.messageCard}
                </p>
              </div>
              <div className="flex justify-between items-center pt-4 border-t">
                <div>
                  <span className="text-sm text-muted-foreground">Gift: </span>
                  <Badge>{giftNames[selectedOrder.giftSelection]}</Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  Payment: <span className="capitalize">{selectedOrder.paymentMethod}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
