export type RbacRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class RbacRecordStateMachine {
  private allowedTransitions: Record<RbacRecordState, RbacRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: RbacRecordState, to: RbacRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: RbacRecordState, to: RbacRecordState): RbacRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for RbacRecord: " + from + " -> " + to);
    }
    return to;
  }
}
