export type IdentityRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IdentityRecordStateMachine {
  private allowedTransitions: Record<IdentityRecordState, IdentityRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IdentityRecordState, to: IdentityRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IdentityRecordState, to: IdentityRecordState): IdentityRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IdentityRecord: " + from + " -> " + to);
    }
    return to;
  }
}
