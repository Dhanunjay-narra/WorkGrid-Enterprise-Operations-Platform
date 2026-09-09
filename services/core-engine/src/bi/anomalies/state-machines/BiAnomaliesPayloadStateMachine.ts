export type BiAnomaliesPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiAnomaliesPayloadStateMachine {
  private allowedTransitions: Record<BiAnomaliesPayloadState, BiAnomaliesPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiAnomaliesPayloadState, to: BiAnomaliesPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiAnomaliesPayloadState, to: BiAnomaliesPayloadState): BiAnomaliesPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiAnomaliesPayload: " + from + " -> " + to);
    }
    return to;
  }
}
