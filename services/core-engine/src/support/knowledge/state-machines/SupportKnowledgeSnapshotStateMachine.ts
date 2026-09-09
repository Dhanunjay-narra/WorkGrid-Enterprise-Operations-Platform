export type SupportKnowledgeSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportKnowledgeSnapshotStateMachine {
  private allowedTransitions: Record<SupportKnowledgeSnapshotState, SupportKnowledgeSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportKnowledgeSnapshotState, to: SupportKnowledgeSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportKnowledgeSnapshotState, to: SupportKnowledgeSnapshotState): SupportKnowledgeSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportKnowledgeSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
