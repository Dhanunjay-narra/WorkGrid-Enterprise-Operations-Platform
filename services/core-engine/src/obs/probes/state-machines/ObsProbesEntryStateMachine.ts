export type ObsProbesEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProbesEntryStateMachine {
  private allowedTransitions: Record<ObsProbesEntryState, ObsProbesEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProbesEntryState, to: ObsProbesEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProbesEntryState, to: ObsProbesEntryState): ObsProbesEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProbesEntry: " + from + " -> " + to);
    }
    return to;
  }
}
