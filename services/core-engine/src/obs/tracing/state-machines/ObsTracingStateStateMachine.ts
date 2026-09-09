export type ObsTracingStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsTracingStateStateMachine {
  private allowedTransitions: Record<ObsTracingStateState, ObsTracingStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsTracingStateState, to: ObsTracingStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsTracingStateState, to: ObsTracingStateState): ObsTracingStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsTracingState: " + from + " -> " + to);
    }
    return to;
  }
}
