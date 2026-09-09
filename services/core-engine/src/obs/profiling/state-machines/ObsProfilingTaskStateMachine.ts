export type ObsProfilingTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProfilingTaskStateMachine {
  private allowedTransitions: Record<ObsProfilingTaskState, ObsProfilingTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProfilingTaskState, to: ObsProfilingTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProfilingTaskState, to: ObsProfilingTaskState): ObsProfilingTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProfilingTask: " + from + " -> " + to);
    }
    return to;
  }
}
