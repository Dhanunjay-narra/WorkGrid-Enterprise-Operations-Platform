export type ObsSpansPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsSpansPayloadStateMachine {
  private allowedTransitions: Record<ObsSpansPayloadState, ObsSpansPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsSpansPayloadState, to: ObsSpansPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsSpansPayloadState, to: ObsSpansPayloadState): ObsSpansPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsSpansPayload: " + from + " -> " + to);
    }
    return to;
  }
}
