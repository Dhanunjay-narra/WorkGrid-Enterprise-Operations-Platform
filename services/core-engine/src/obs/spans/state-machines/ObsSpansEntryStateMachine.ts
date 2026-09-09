export type ObsSpansEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsSpansEntryStateMachine {
  private allowedTransitions: Record<ObsSpansEntryState, ObsSpansEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsSpansEntryState, to: ObsSpansEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsSpansEntryState, to: ObsSpansEntryState): ObsSpansEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsSpansEntry: " + from + " -> " + to);
    }
    return to;
  }
}
