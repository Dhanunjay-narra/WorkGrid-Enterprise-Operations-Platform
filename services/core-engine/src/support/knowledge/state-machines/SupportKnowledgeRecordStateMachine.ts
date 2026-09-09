export type SupportKnowledgeRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportKnowledgeRecordStateMachine {
  private allowedTransitions: Record<SupportKnowledgeRecordState, SupportKnowledgeRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportKnowledgeRecordState, to: SupportKnowledgeRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportKnowledgeRecordState, to: SupportKnowledgeRecordState): SupportKnowledgeRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportKnowledgeRecord: " + from + " -> " + to);
    }
    return to;
  }
}
