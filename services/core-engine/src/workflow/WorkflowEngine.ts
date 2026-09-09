import { WorkflowDefinition, UUID } from '@nexora/types';

export class WorkflowEngine {
  private workflows = new Map<UUID, WorkflowDefinition>();

  public registerWorkflow(workflow: WorkflowDefinition): void {
    this.workflows.set(workflow.id, workflow);
  }

  public async executeWorkflow(workflowId: UUID, initialPayload: Record<string, any>): Promise<{ executionId: string; status: string; nodeResults: Record<string, any> }> {
    const wf = this.workflows.get(workflowId);
    if (!wf) throw new Error(`Workflow ${workflowId} not found`);

    const executionId = 'exec_' + Math.random().toString(36).substring(2, 9);
    const nodeResults: Record<string, any> = {};

    for (const node of wf.nodes) {
      nodeResults[node.id] = {
        executed: true,
        output: `Result for node ${node.name} (${node.type})`
      };
    }

    return {
      executionId,
      status: 'COMPLETED',
      nodeResults
    };
  }
}
