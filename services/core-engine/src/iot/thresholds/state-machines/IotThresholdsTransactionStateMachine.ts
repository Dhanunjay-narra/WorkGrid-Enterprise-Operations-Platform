export type IotThresholdsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotThresholdsTransactionStateMachine {
  private allowedTransitions: Record<IotThresholdsTransactionState, IotThresholdsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotThresholdsTransactionState, to: IotThresholdsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotThresholdsTransactionState, to: IotThresholdsTransactionState): IotThresholdsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotThresholdsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
