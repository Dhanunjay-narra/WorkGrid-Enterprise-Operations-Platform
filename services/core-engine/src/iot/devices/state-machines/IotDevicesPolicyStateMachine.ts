export type IotDevicesPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotDevicesPolicyStateMachine {
  private allowedTransitions: Record<IotDevicesPolicyState, IotDevicesPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotDevicesPolicyState, to: IotDevicesPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotDevicesPolicyState, to: IotDevicesPolicyState): IotDevicesPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotDevicesPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
