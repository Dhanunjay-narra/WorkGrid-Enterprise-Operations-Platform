export type SupportSlaRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSlaRecordStateMachine {
  private allowedTransitions: Record<SupportSlaRecordState, SupportSlaRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSlaRecordState, to: SupportSlaRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSlaRecordState, to: SupportSlaRecordState): SupportSlaRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSlaRecord: " + from + " -> " + to);
    }
    return to;
  }
}
