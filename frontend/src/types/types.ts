
export type LocationStatus = {
    _id: string;
    name: string;
    maxCapacity: number;
    currentCount: number;
    history: Array<{ action: string; timestamp: string }>;
  };