export type IotDevicesTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotDevicesTransactionStateMachine {
  private allowedTransitions: Record<IotDevicesTransactionState, IotDevicesTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotDevicesTransactionState, to: IotDevicesTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotDevicesTransactionState, to: IotDevicesTransactionState): IotDevicesTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotDevicesTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
