export type IotAnomaliesTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotAnomaliesTransactionStateMachine {
  private allowedTransitions: Record<IotAnomaliesTransactionState, IotAnomaliesTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotAnomaliesTransactionState, to: IotAnomaliesTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotAnomaliesTransactionState, to: IotAnomaliesTransactionState): IotAnomaliesTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotAnomaliesTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
