export type IntSyncProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSyncProfileStateMachine {
  private allowedTransitions: Record<IntSyncProfileState, IntSyncProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSyncProfileState, to: IntSyncProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSyncProfileState, to: IntSyncProfileState): IntSyncProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSyncProfile: " + from + " -> " + to);
    }
    return to;
  }
}
