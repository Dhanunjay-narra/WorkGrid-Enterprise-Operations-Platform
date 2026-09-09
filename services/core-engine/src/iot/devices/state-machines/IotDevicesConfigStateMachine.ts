export type IotDevicesConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotDevicesConfigStateMachine {
  private allowedTransitions: Record<IotDevicesConfigState, IotDevicesConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotDevicesConfigState, to: IotDevicesConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotDevicesConfigState, to: IotDevicesConfigState): IotDevicesConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotDevicesConfig: " + from + " -> " + to);
    }
    return to;
  }
}
