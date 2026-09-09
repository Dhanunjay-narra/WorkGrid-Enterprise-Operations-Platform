export type ObsLoggingEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsLoggingEntryStateMachine {
  private allowedTransitions: Record<ObsLoggingEntryState, ObsLoggingEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsLoggingEntryState, to: ObsLoggingEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsLoggingEntryState, to: ObsLoggingEntryState): ObsLoggingEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsLoggingEntry: " + from + " -> " + to);
    }
    return to;
  }
}
