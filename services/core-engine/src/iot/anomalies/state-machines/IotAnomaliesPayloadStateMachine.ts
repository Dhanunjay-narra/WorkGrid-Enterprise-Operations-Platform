export type IotAnomaliesPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotAnomaliesPayloadStateMachine {
  private allowedTransitions: Record<IotAnomaliesPayloadState, IotAnomaliesPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotAnomaliesPayloadState, to: IotAnomaliesPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotAnomaliesPayloadState, to: IotAnomaliesPayloadState): IotAnomaliesPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotAnomaliesPayload: " + from + " -> " + to);
    }
    return to;
  }
}
