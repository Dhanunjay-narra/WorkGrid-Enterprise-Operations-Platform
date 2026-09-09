export type DmsVersionsProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsVersionsProfileStateMachine {
  private allowedTransitions: Record<DmsVersionsProfileState, DmsVersionsProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsVersionsProfileState, to: DmsVersionsProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsVersionsProfileState, to: DmsVersionsProfileState): DmsVersionsProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsVersionsProfile: " + from + " -> " + to);
    }
    return to;
  }
}
