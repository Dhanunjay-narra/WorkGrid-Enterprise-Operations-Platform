export type ObsTracingEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsTracingEntryStateMachine {
  private allowedTransitions: Record<ObsTracingEntryState, ObsTracingEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsTracingEntryState, to: ObsTracingEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsTracingEntryState, to: ObsTracingEntryState): ObsTracingEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsTracingEntry: " + from + " -> " + to);
    }
    return to;
  }
}
