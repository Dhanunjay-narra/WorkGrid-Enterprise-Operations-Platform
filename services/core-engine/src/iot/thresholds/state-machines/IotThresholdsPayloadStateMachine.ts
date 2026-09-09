export type IotThresholdsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotThresholdsPayloadStateMachine {
  private allowedTransitions: Record<IotThresholdsPayloadState, IotThresholdsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotThresholdsPayloadState, to: IotThresholdsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotThresholdsPayloadState, to: IotThresholdsPayloadState): IotThresholdsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotThresholdsPayload: " + from + " -> " + to);
    }
    return to;
  }
}
