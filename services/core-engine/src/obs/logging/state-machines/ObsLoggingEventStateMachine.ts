export type ObsLoggingEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsLoggingEventStateMachine {
  private allowedTransitions: Record<ObsLoggingEventState, ObsLoggingEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsLoggingEventState, to: ObsLoggingEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsLoggingEventState, to: ObsLoggingEventState): ObsLoggingEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsLoggingEvent: " + from + " -> " + to);
    }
    return to;
  }
}
