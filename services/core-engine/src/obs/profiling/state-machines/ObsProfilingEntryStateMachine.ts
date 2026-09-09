export type ObsProfilingEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProfilingEntryStateMachine {
  private allowedTransitions: Record<ObsProfilingEntryState, ObsProfilingEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProfilingEntryState, to: ObsProfilingEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProfilingEntryState, to: ObsProfilingEntryState): ObsProfilingEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProfilingEntry: " + from + " -> " + to);
    }
    return to;
  }
}
