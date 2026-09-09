export type DmsExportRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsExportRuleStateMachine {
  private allowedTransitions: Record<DmsExportRuleState, DmsExportRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsExportRuleState, to: DmsExportRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsExportRuleState, to: DmsExportRuleState): DmsExportRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsExportRule: " + from + " -> " + to);
    }
    return to;
  }
}
