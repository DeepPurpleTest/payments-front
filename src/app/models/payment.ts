export interface Payment {
  id: number,
  sender: string,
  receiver: string,
  currentUserCard: string,
  currentCardBalance: number,
  amount: number,
  status: string,
  date: Date;
}
