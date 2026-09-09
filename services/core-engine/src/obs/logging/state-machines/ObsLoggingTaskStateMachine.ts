export type ObsLoggingTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsLoggingTaskStateMachine {
  private allowedTransitions: Record<ObsLoggingTaskState, ObsLoggingTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsLoggingTaskState, to: ObsLoggingTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsLoggingTaskState, to: ObsLoggingTaskState): ObsLoggingTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsLoggingTask: " + from + " -> " + to);
    }
    return to;
  }
}
