export type IotFirmwareTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFirmwareTransactionStateMachine {
  private allowedTransitions: Record<IotFirmwareTransactionState, IotFirmwareTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFirmwareTransactionState, to: IotFirmwareTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFirmwareTransactionState, to: IotFirmwareTransactionState): IotFirmwareTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFirmwareTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
