export type ObsProfilingEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProfilingEventStateMachine {
  private allowedTransitions: Record<ObsProfilingEventState, ObsProfilingEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProfilingEventState, to: ObsProfilingEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProfilingEventState, to: ObsProfilingEventState): ObsProfilingEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProfilingEvent: " + from + " -> " + to);
    }
    return to;
  }
}
