export type ObsLoggingPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsLoggingPolicyStateMachine {
  private allowedTransitions: Record<ObsLoggingPolicyState, ObsLoggingPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsLoggingPolicyState, to: ObsLoggingPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsLoggingPolicyState, to: ObsLoggingPolicyState): ObsLoggingPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsLoggingPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
