export type IotLocationsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotLocationsTransactionStateMachine {
  private allowedTransitions: Record<IotLocationsTransactionState, IotLocationsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotLocationsTransactionState, to: IotLocationsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotLocationsTransactionState, to: IotLocationsTransactionState): IotLocationsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotLocationsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
