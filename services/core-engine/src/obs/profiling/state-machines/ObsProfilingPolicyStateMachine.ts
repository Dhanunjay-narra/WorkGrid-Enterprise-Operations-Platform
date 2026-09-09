export type ObsProfilingPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProfilingPolicyStateMachine {
  private allowedTransitions: Record<ObsProfilingPolicyState, ObsProfilingPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProfilingPolicyState, to: ObsProfilingPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProfilingPolicyState, to: ObsProfilingPolicyState): ObsProfilingPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProfilingPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
