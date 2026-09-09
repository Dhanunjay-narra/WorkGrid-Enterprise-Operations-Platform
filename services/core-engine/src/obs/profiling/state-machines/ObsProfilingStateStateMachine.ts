export type ObsProfilingStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProfilingStateStateMachine {
  private allowedTransitions: Record<ObsProfilingStateState, ObsProfilingStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProfilingStateState, to: ObsProfilingStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProfilingStateState, to: ObsProfilingStateState): ObsProfilingStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProfilingState: " + from + " -> " + to);
    }
    return to;
  }
}
