export type ObsLoggingPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsLoggingPayloadStateMachine {
  private allowedTransitions: Record<ObsLoggingPayloadState, ObsLoggingPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsLoggingPayloadState, to: ObsLoggingPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsLoggingPayloadState, to: ObsLoggingPayloadState): ObsLoggingPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsLoggingPayload: " + from + " -> " + to);
    }
    return to;
  }
}
