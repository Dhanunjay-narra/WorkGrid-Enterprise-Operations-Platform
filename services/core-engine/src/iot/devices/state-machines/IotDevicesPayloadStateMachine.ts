export type IotDevicesPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotDevicesPayloadStateMachine {
  private allowedTransitions: Record<IotDevicesPayloadState, IotDevicesPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotDevicesPayloadState, to: IotDevicesPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotDevicesPayloadState, to: IotDevicesPayloadState): IotDevicesPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotDevicesPayload: " + from + " -> " + to);
    }
    return to;
  }
}
