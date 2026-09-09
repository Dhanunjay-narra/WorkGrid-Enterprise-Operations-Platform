export type IotFirmwarePayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFirmwarePayloadStateMachine {
  private allowedTransitions: Record<IotFirmwarePayloadState, IotFirmwarePayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFirmwarePayloadState, to: IotFirmwarePayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFirmwarePayloadState, to: IotFirmwarePayloadState): IotFirmwarePayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFirmwarePayload: " + from + " -> " + to);
    }
    return to;
  }
}
