export type SupportEscalationRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportEscalationRecordStateMachine {
  private allowedTransitions: Record<SupportEscalationRecordState, SupportEscalationRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportEscalationRecordState, to: SupportEscalationRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportEscalationRecordState, to: SupportEscalationRecordState): SupportEscalationRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportEscalationRecord: " + from + " -> " + to);
    }
    return to;
  }
}
