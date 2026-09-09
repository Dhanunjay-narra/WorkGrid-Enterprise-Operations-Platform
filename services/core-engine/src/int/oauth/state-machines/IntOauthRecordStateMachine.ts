export type IntOauthRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntOauthRecordStateMachine {
  private allowedTransitions: Record<IntOauthRecordState, IntOauthRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntOauthRecordState, to: IntOauthRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntOauthRecordState, to: IntOauthRecordState): IntOauthRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntOauthRecord: " + from + " -> " + to);
    }
    return to;
  }
}
