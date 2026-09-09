export type IotDevicesMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotDevicesMappingStateMachine {
  private allowedTransitions: Record<IotDevicesMappingState, IotDevicesMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotDevicesMappingState, to: IotDevicesMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotDevicesMappingState, to: IotDevicesMappingState): IotDevicesMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotDevicesMapping: " + from + " -> " + to);
    }
    return to;
  }
}
