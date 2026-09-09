export type ProjectRisksItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectRisksItemStateMachine {
  private allowedTransitions: Record<ProjectRisksItemState, ProjectRisksItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectRisksItemState, to: ProjectRisksItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectRisksItemState, to: ProjectRisksItemState): ProjectRisksItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectRisksItem: " + from + " -> " + to);
    }
    return to;
  }
}
