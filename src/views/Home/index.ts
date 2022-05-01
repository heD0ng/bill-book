export interface BillType {
    id: number;
    name: string;
    type?: 1|2;
}

export interface BillItemType {
    date: string;
    amount?: string;
    type_name?: string;
    remark?: string;
}

/**  单日账单全部记录 */
export interface BillList {
    date: string;
    bills: BillItemType[];
  }