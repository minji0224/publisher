export interface PieChartData {
  bookId: number;
  isbn: string;
  priceSales: number;
  totalCount: number;
  title: string;
  author: string;
  uuidFilename?: string;
}

export interface LineChartData {
  saleDate: string;
  totalCount: number;
  totalPrice: number;
}
