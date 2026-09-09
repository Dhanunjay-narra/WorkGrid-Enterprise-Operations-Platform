export type ProjectRisksQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectRisksQueueStateMachine {
  private allowedTransitions: Record<ProjectRisksQueueState, ProjectRisksQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectRisksQueueState, to: ProjectRisksQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectRisksQueueState, to: ProjectRisksQueueState): ProjectRisksQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectRisksQueue: " + from + " -> " + to);
    }
    return to;
  }
}
