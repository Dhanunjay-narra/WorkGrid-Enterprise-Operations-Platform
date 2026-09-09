export type ObsProbesProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProbesProfileStateMachine {
  private allowedTransitions: Record<ObsProbesProfileState, ObsProbesProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProbesProfileState, to: ObsProbesProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProbesProfileState, to: ObsProbesProfileState): ObsProbesProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProbesProfile: " + from + " -> " + to);
    }
    return to;
  }
}
