export type DmsFilesRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFilesRuleStateMachine {
  private allowedTransitions: Record<DmsFilesRuleState, DmsFilesRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFilesRuleState, to: DmsFilesRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFilesRuleState, to: DmsFilesRuleState): DmsFilesRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFilesRule: " + from + " -> " + to);
    }
    return to;
  }
}
