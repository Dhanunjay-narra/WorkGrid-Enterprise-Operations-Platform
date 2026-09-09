export type IotCommandsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotCommandsTransactionStateMachine {
  private allowedTransitions: Record<IotCommandsTransactionState, IotCommandsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotCommandsTransactionState, to: IotCommandsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotCommandsTransactionState, to: IotCommandsTransactionState): IotCommandsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotCommandsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
