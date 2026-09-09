export type IotDevicesProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotDevicesProfileStateMachine {
  private allowedTransitions: Record<IotDevicesProfileState, IotDevicesProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotDevicesProfileState, to: IotDevicesProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotDevicesProfileState, to: IotDevicesProfileState): IotDevicesProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotDevicesProfile: " + from + " -> " + to);
    }
    return to;
  }
}
