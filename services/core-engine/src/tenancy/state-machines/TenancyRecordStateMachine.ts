export type TenancyRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class TenancyRecordStateMachine {
  private allowedTransitions: Record<TenancyRecordState, TenancyRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: TenancyRecordState, to: TenancyRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: TenancyRecordState, to: TenancyRecordState): TenancyRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for TenancyRecord: " + from + " -> " + to);
    }
    return to;
  }
}
