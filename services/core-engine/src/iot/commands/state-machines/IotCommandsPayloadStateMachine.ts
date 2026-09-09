export type IotCommandsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotCommandsPayloadStateMachine {
  private allowedTransitions: Record<IotCommandsPayloadState, IotCommandsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotCommandsPayloadState, to: IotCommandsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotCommandsPayloadState, to: IotCommandsPayloadState): IotCommandsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotCommandsPayload: " + from + " -> " + to);
    }
    return to;
  }
}
